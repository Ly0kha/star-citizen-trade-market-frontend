import { Commodity, Location } from '@/shared/graphql.schema';
import { VDataTableHeader } from '@/shared/vuetify/v-data-table';
import gql from 'graphql-tag';
import { QueryResult } from 'vue-apollo/types/vue-apollo';
import { Component, Model, Prop, Vue } from 'vue-property-decorator';

@Component({
	apollo: {
		locations: gql`
			query locations {
				locations {
					id
					name
				}
			}
		`,
		commodities: gql`
			query commodities {
				commodities {
					id
					name
					... on Commodity {
						commodityCategory {
							name
						}
					}
				}
			}
		`
	}
})
export default class ReportPrice extends Vue {
	@Model('close', { type: Boolean })
	public open!: boolean;

	@Prop({ default: null })
	public location: Location | null = null;

	@Prop({ default: 1 })
	public quantity: number = 1;
	public price: number = 1;

	public selectedCommodity: any = null;

	public readonly itemPrices: any[] = [];

	public headers: VDataTableHeader[] = [
		{ text: 'Commodity ', value: 'commodity.name' },
		{ text: 'Quantity ', value: 'quantity' },
		{ text: 'Price ', value: 'price' },
		{ text: 'Price per Unit ', value: 'unitPrice' },
		{ text: 'Type ', value: 'type' },
		{ text: '', value: 'action', sortable: false }
	];

	constructor() {
		super();
	}

	public get invalidCommodity(): boolean {
		return this.selectedCommodity === null;
	}

	public get invalid(): boolean {
		return this.location === null || this.itemPrices.length === 0;
	}

	public displayWithCommodity(x: Commodity): string {
		return `${x.name} (${x.commodityCategory.name})`;
	}

	public addItemPrice(): void {
		this.itemPrices.push({
			commodity: this.selectedCommodity,
			quantity: this.quantity,
			price: this.price,
			type: 'BUY'
		});
	}

	public removeItemPrice(index: number): void {
		this.itemPrices.splice(index, 1);
	}

	public async reportItemPrices(): Promise<void> {
		// TODO: report prices
		console.log({
			location: this.location,
			itemPrices: this.itemPrices
		});
		const promises: Array<Promise<QueryResult<any>>> = [];
		for (const itemPrice of this.itemPrices) {
			promises.push(
				this.$apollo.mutate({
					mutation: gql`
						mutation CreateItemPrice($itemPrice: CreateItemPriceInput!) {
							createItemPrice(createItemPriceInput: $itemPrice) {
								id
							}
						}
					`,
					variables: {
						itemPrice: {
							itemId: itemPrice.commodity.id,
							locationId: this.location!.id,
							price: itemPrice.price,
							quantity: itemPrice.quantity,
							type: itemPrice.type
						}
					},
					context: { headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')!).token}` } }
				})
			);
		}
		await Promise.all(promises);

		this.$emit('close');
	}
}
