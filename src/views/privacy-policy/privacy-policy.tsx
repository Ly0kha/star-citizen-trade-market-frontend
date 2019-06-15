import { Component, Vue } from 'vue-property-decorator';
import { VDivider, VLayout } from 'vuetify-tsx';

@Component
export default class PrivacyPolicy extends Vue {
	constructor() {
		super();
	}

	public render(): JSX.Element {
		return (
			<VLayout align-start justify-start column>
				<h1 class="display-2">Privacy Policy</h1>
				<p>Effective date: January 21, 2019</p>
				<p>
					This is an unofficial Star Citizen fansite, not affiliated with the Cloud Imperium group of
					companies. All content on this site not authored by its host or users are property of their
					respective owners.
				</p>
				<p>
					This site is not endorsed by or affiliated with the Cloud Imperium or Roberts Space Industries group
					of companies. All game content and materials are copyright Cloud Imperium Rights LLC and Cloud
					Imperium Rights Ltd.. Star Citizen®, Squadron 42®, Roberts Space Industries®, and Cloud Imperium®
					are registered trademarks of Cloud Imperium Rights LLC. All rights reserved.
				</p>
				<p>
					Star Citizen Trade Market ("us", "we", or "our") operates the
					https://shinigami92.github.io/star-citizen-trade-market-frontend website (the "Service").
				</p>
				<p>
					This page informs you of our policies regarding the collection, use, and disclosure of personal data
					when you use our Service and the choices you have associated with that data.
				</p>
				<p>
					We use your data to provide and improve the Service. By using the Service, you agree to the
					collection and use of information in accordance with this policy.
				</p>
				<h2 class="display-1">Information Collection And Use</h2>
				<p>
					We collect several different types of information for various purposes to provide and improve our
					Service to you.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Types of Data Collected</h2>
				<h3 class="headline">Personal Data</h3>
				<p>
					While using our Service, we may ask you to provide us with certain personally identifiable
					information that can be used to contact or identify you ("Personal Data"). Personally identifiable
					information may include, but is not limited to:
				</p>
				<ul>
					<li>E-Mail Address</li>
					<li>Star Citizen Handle</li>
					<li>Usage Data</li>
				</ul>
				<h3 class="headline">Usage Data</h3>
				<p>
					We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data
					may include information such as your browser type, browser version, the pages of our Service that
					you visit, the time and date of your visit, unique device identifiers and other diagnostic data.
				</p>
				<h3 class="headline">Tracking & Cookies Data</h3>
				<p>
					We <strong>do not</strong> use cookies or similar tracking technologies to track your activity on
					our Service.
				</p>
				<p>
					We use the localStorage to cache the login information. These contain the user's authentication
					token, ID, user name, and roles.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Use of Data</h2>
				<p>Star Citizen Trade Market uses the collected data for various purposes:</p>
				<ul>
					<li>To provide and maintain the Service</li>
					<li>To allow you to participate in interactive features of our Service when you choose to do so</li>
					<li>To provide analysis or valuable information so that we can improve the Service</li>
					<li>To monitor the usage of the Service</li>
					<li>To detect, prevent and address technical issues</li>
				</ul>
				<VDivider></VDivider>
				<h2 class="display-1">Transfer Of Data</h2>
				<p>
					Your information, including Personal Data, may be transferred to — and maintained on — computers
					located outside of your state, province, country or other governmental jurisdiction where the data
					protection laws may differ than those from your jurisdiction.
				</p>
				<p>
					If you are located outside Germany and choose to provide information to us, please note that we
					transfer the data, including Personal Data, to Germany and process it there.
				</p>
				<p>
					Your consent to this Privacy Policy followed by your submission of such information represents your
					agreement to that transfer.
				</p>
				<p>
					Star Citizen Trade Market will take all steps reasonably necessary to ensure that your data is
					treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data
					will take place to an organization or a country unless there are adequate controls in place
					including the security of your data and other personal information.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Disclosure Of Data</h2>
				<h3 class="headline">Legal Requirements</h3>
				<p>
					Star Citizen Trade Market may disclose your Personal Data in the good faith belief that such action
					is necessary to:
				</p>
				<ul>
					<li>To comply with a legal obligation</li>
					<li>To protect and defend the rights or property of Star Citizen Trade Market</li>
					<li>To prevent or investigate possible wrongdoing in connection with the Service</li>
					<li>To protect the personal safety of users of the Service or the public</li>
					<li>To protect against legal liability</li>
				</ul>
				<VDivider></VDivider>
				<h2 class="display-1">Security Of Data</h2>
				<p>
					The security of your data is important to us, but remember that no method of transmission over the
					Internet, or method of electronic storage is 100% secure. While we strive to use commercially
					acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Service Providers</h2>
				<p>
					We may employ third party companies and individuals to facilitate our Service ("Service Providers"),
					to provide the Service on our behalf, to perform Service-related services or to assist us in
					analyzing how our Service is used.
				</p>
				<p>
					These third parties have access to your Personal Data only to perform these tasks on our behalf and
					are obligated not to disclose or use it for any other purpose.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Links To Other Sites</h2>
				<p>
					Our Service may contain links to other sites that are not operated by us. If you click on a third
					party link, you will be directed to that third party's site. We strongly advise you to review the
					Privacy Policy of every site you visit.
				</p>
				<p>
					We have no control over and assume no responsibility for the content, privacy policies or practices
					of any third party sites or services.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Children's Privacy</h2>
				<p>Our Service does not address anyone under the age of 18 ("Children").</p>
				<p>
					We do not knowingly collect personally identifiable information from anyone under the age of 18. If
					you are a parent or guardian and you are aware that your Children has provided us with Personal
					Data, please contact us. If we become aware that we have collected Personal Data from children
					without verification of parental consent, we take steps to remove that information from our servers.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Changes To This Privacy Policy</h2>
				<p>
					We may update our Privacy Policy from time to time. We will notify you of any changes by posting the
					new Privacy Policy on this page.
				</p>
				<p>
					We will let you know via email and/or a prominent notice on our Service, prior to the change
					becoming effective and update the "effective date" at the top of this Privacy Policy.
				</p>
				<p>
					You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
					Policy are effective when they are posted on this page.
				</p>
				<VDivider></VDivider>
				<h2 class="display-1">Contact Us</h2>
				<p>If you have any questions about this Privacy Policy, please contact us:</p>
				<ul>
					<li>
						By visiting our Discord Server:
						<a href="https://discordapp.com/invite/FxJmUYT">https://discordapp.com/invite/FxJmUYT</a>
					</li>
					<li>
						By email me: <a href="mailto:chrissi92@hotmail.de">chrissi92@hotmail.de</a>
					</li>
				</ul>
			</VLayout>
		);
	}
}
