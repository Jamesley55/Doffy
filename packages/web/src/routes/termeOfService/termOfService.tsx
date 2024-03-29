/* eslint-disable react/jsx-no-undef */
import { Link } from "@react-navigation/native";
import * as React from "react";
import {
	Image,
	Linking,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { CustomStyle } from "../style/style";

export const TermOfService: React.FC = () => {
	return (
		<View>
			<View style={{ backgroundColor: "gray" }}>
				<TouchableOpacity
					onPress={() => {
						Linking.openURL("realDoffy.com");
					}}
				>
					<Image
						source={require("./asset/icon.png")}
						style={{ alignSelf: "center", width: 50, height: 50 }}
						resizeMethod="resize"
					/>
				</TouchableOpacity>
			</View>
			<View style={CustomStyle.Policy}>
				<Text>
					<p>TERMS OF SERVICE</p>

					<p>----</p>

					<h2>OVERVIEW</h2>

					<p>
						This website is operated by Doffy. Throughout the site, the terms
						&ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to
						Doffy. Doffy offers this website, including all information, tools
						and services available from this site to you, the user, conditioned
						upon your acceptance of all terms, conditions, policies and notices
						stated here.
					</p>

					<p>
						By visiting our site, or by engaging in our &ldquo;Service&rdquo;
						you agree to be bound by the following terms and conditions
						(&ldquo;Terms of Service&rdquo;, &ldquo;Terms&rdquo;), including
						those additional terms and conditions and policies referenced herein
						and/or available by hyperlink. These Terms of Service apply to all
						users of the site, including without limitation users who are
						browsers, vendors, customers, merchants, and/ or contributors of
						content.
					</p>

					<p>
						Please read these Terms of Service carefully before accessing or
						using our Platform. By accessing or using any part of the Platform,
						you agree to be bound by these Terms of Service. If you do not agree
						to all the terms and conditions of this agreement, then you may not
						access the PLatform or use any services. If these Terms of Service
						are considered an offer, acceptance is expressly limited to these
						Terms of Service.
					</p>

					<p>
						Any new features or tools which are added to the current store shall
						also be subject to the Terms of Service. You can review the most
						current version of the Terms of Service at any time on this page. We
						reserve the right to update, change or replace any part of these
						Terms of Service by posting updates and/or changes to our website.
						It is your responsibility to check this page periodically for
						changes. Your continued use of or access to the website following
						the posting of any changes constitutes acceptance of those changes.
					</p>

					<p>
						Our store is hosted on Shopify Inc. They provide us with the online
						platform that allows us to manage and book for an appointment from a
						third party service provider
					</p>

					<p>
						You may not use our PLatform for any illegal or unauthorized purpose
						nor may you, in the use of the Service, violate any laws in your
						jurisdiction (including but not limited to copyright laws).
					</p>

					<p>
						You must not transmit any worms or viruses or any code of a
						destructive nature.
					</p>

					<p>
						A breach or violation of any of the Terms will result in an
						immediate termination of your Services.
					</p>

					<h3> SECTION 2 - GENERAL CONDITIONS</h3>

					<p>
						We reserve the right to refuse service to anyone for any reason at
						any time.
					</p>

					<p>
						You understand that your content (not including credit card
						information), may be transferred unencrypted and involve (a)
						transmissions over various networks; and (b) changes to conform and
						adapt to technical requirements of connecting networks or devices.
						Credit card information is always encrypted during transfer over
						networks.
					</p>

					<p>
						The headings used in this agreement are included for convenience
						only and will not limit or otherwise affect these Terms.
					</p>

					<h3>
						SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
					</h3>

					<p>
						We are not responsible if information made available on this site is
						not accurate, complete or current. The material on this site is
						provided for general information only and should not be relied upon
						or used as the sole basis for making decisions without consulting
						primary, more accurate, more complete or more timely sources of
						information. Any reliance on the material on this site is at your
						own risk.
					</p>

					<p>
						This site may contain certain historical information. Historical
						information, necessarily, is not current and is provided for your
						reference only. We reserve the right to modify the contents of this
						site at any time, but we have no obligation to update any
						information on our site. You agree that it is your responsibility to
						monitor changes to our site.
					</p>

					<h3> SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES</h3>

					<p>
						We shall not be liable to you or to any third-party for any
						modification, price change, suspension or discontinuance of the
						Service.
					</p>

					<h3> SECTION 5 - PRODUCTS OR SERVICES (if applicable)</h3>

					<p>
						We reserve the right, but are not obligated, to limit our Services
						to any person, geographic region or jurisdiction. We may exercise
						this right on a case-by-case basis. We reserve the right to limit
						the quantities of any products or services that we offer. All
						descriptions of products or product pricing are subject to change at
						anytime without notice, at the sole discretion of us. We reserve the
						right to discontinue any product at any time. Any offer for any
						product or service made on this site is void where prohibited.
					</p>

					<p>
						We do not warrant that the quality of any products, services,
						information, or other material purchased or obtained by you will
						meet your expectations, or that any errors in the Service will be
						corrected.
					</p>

					<h3> SECTION 7 - OPTIONAL TOOLS</h3>

					<p>
						You acknowledge and agree that we provide access to such tools
						&rdquo;as is&rdquo; and &ldquo;as available&rdquo; without any
						warranties, representations or conditions of any kind and without
						any endorsement. We shall have no liability whatsoever arising from
						or relating to your use of optional third-party tools.
					</p>

					<p>
						Any use by you of optional tools offered through the site is
						entirely at your own risk and discretion and you should ensure that
						you are familiar with and approve of the terms on which tools are
						provided by the relevant third-party provider(s).
					</p>

					<p>
						We may also, in the future, offer new services and/or features
						through the PLatform (including, the release of new tools and
						resources). Such new features and/or services shall also be subject
						to these Terms of Service.
					</p>

					<h3> SECTION 8 - THIRD-PARTY LINKS</h3>

					<p>
						All content, products and services available via our Service include
						materials from third-parties contractor.
					</p>

					<h3> SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS</h3>

					<p>
						If, at our request, you send certain specific submissions (for
						example contest entries) or without a request from us you send
						creative ideas, suggestions, proposals, plans, or other materials,
						whether online, by email, by postal mail, or otherwise
						(collectively, 'comments'), you agree that we may, at any time,
						without restriction, edit, copy, publish, distribute, translate and
						otherwise use in any medium any comments that you forward to us. We
						are and shall be under no obligation (1) to maintain any comments in
						confidence; (2) to pay compensation for any comments; or (3) to
						respond to any comments.
					</p>

					<p>
						We may, but have no obligation to, monitor, edit or remove content
						that we determine in our sole discretion are unlawful, offensive,
						threatening, libelous, defamatory, pornographic, obscene or
						otherwise objectionable or violates any party&rsquo;s intellectual
						property or these Terms of Service.
					</p>

					<p>
						You agree that your comments will not violate any right of any
						third-party, including copyright, trademark, privacy, personality or
						other personal or proprietary right. You further agree that your
						comments will not contain libelous or otherwise unlawful, abusive or
						obscene material, or contain any computer virus or other malware
						that could in any way affect the operation of the Service or any
						related website. You may not use a false e-mail address, pretend to
						be someone other than yourself, or otherwise mislead us or
						third-parties as to the origin of any comments. You are solely
						responsible for any comments you make and their accuracy. We take no
						responsibility and assume no liability for any comments posted by
						you or any third-party.
					</p>

					<h3> SECTION 10 - PERSONAL INFORMATION</h3>

					<p>
						Your submission of personal information through the store is
						governed by our Privacy Policy. To view our Privacy Policy.
					</p>

					<p> SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS</p>

					<p>
						Occasionally there may be information on our site or in the Service
						that contains typographical errors, inaccuracies or omissions that
						may relate to product descriptions, pricing, promotions, offers,
						product shipping charges, transit times and availability. We reserve
						the right to correct any errors, inaccuracies or omissions, and to
						change or update information or cancel orders if any information in
						the Service or on any related website is inaccurate at any time
						without prior notice (including after you have submitted your
						order).
					</p>

					<h3>SECTION 12 - PROHIBITED USES</h3>

					<p>
						In addition to other prohibitions as set forth in the Terms of
						Service, you are prohibited from using the site or its content: (a)
						for any unlawful purpose; (b) to solicit others to perform or
						participate in any unlawful acts; (c) to violate any international,
						federal, provincial or state regulations, rules, laws, or local
						ordinances; (d) to infringe upon or violate our intellectual
						property rights or the intellectual property rights of others; (e)
						to harass, abuse, insult, harm, defame, slander, disparage,
						intimidate, or discriminate based on gender, sexual orientation,
						religion, ethnicity, race, age, national origin, or disability; (f)
						to submit false or misleading information; (g) to upload or transmit
						viruses or any other type of malicious code that will or may be used
						in any way that will affect the functionality or operation of the
						Service or of any related website, other websites, or the Internet;
						(h) to collect or track the personal information of others; (i) to
						spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any
						obscene or immoral purpose; or (k) to interfere with or circumvent
						the security features of the Service or any related website, other
						websites, or the Internet. We reserve the right to terminate your
						use of the Service or any related website for violating any of the
						prohibited uses.
					</p>

					<h3>
						{" "}
						SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
					</h3>

					<p>
						We do not guarantee, represent or warrant that your use of our
						service will be uninterrupted, timely, secure or error-free.
					</p>

					<p>
						We do not warrant that the results that may be obtained from the use
						of the service will be accurate or reliable.
					</p>

					<p>
						You agree that from time to time we may remove the service for
						indefinite periods of time or cancel the service at any time,
						without notice to you.
					</p>

					<p>
						You expressly agree that your use of, or inability to use, the
						service is at your sole risk. The service and all products and
						services delivered to you through the service are (except as
						expressly stated by us) provided 'as is' and 'as available' for your
						use, without any representation, warranties or conditions of any
						kind, either express or implied, including all implied warranties or
						conditions of merchantability, merchantable quality, fitness for a
						particular purpose, durability, title, and non-infringement.
					</p>

					<p>
						In no case shall Doffy, our directors, officers, employees,
						affiliates, agents, contractors, interns, suppliers, service
						providers or licensors be liable for any injury, loss, claim, or any
						direct, indirect, incidental, punitive, special, or consequential
						damages of any kind, including, without limitation lost profits,
						lost revenue, lost savings, loss of data, replacement costs, or any
						similar damages, whether based in contract, tort (including
						negligence), strict liability or otherwise, arising from your use of
						any of the service or any products procured using the service, or
						for any other claim related in any way to your use of the service or
						any product, including, but not limited to, any errors or omissions
						in any content, or any loss or damage of any kind incurred as a
						result of the use of the service or any content (or product) posted,
						transmitted, or otherwise made available via the service, even if
						advised of their possibility. Because some states or jurisdictions
						do not allow the exclusion or the limitation of liability for
						consequential or incidental damages, in such states or
						jurisdictions, our liability shall be limited to the maximum extent
						permitted by law.
					</p>

					<p></p>

					<h3>SECTION 14 - INDEMNIFICATION</h3>

					<p>
						You agree to indemnify, defend and hold harmless Doffy and our
						parent, subsidiaries, affiliates, partners, officers, directors,
						agents, contractors, licensors, service providers, subcontractors,
						suppliers, interns and employees, harmless from any claim or demand,
						including reasonable attorneys&rsquo; fees, made by any third-party
						due to or arising out of your breach of these Terms of Service or
						the documents they incorporate by reference, or your violation of
						any law or the rights of a third-party.
					</p>

					<h3> SECTION 15 - SEVERABILITY</h3>

					<p>
						In the event that any provision of these Terms of Service is
						determined to be unlawful, void or unenforceable, such provision
						shall nonetheless be enforceable to the fullest extent permitted by
						applicable law, and the unenforceable portion shall be deemed to be
						severed from these Terms of Service, such determination shall not
						affect the validity and enforceability of any other remaining
						provisions.
					</p>

					<h3> SECTION 16 - TERMINATION</h3>

					<p>
						The obligations and liabilities of the parties incurred prior to the
						termination date shall survive the termination of this agreement for
						all purposes.
					</p>

					<p>
						These Terms of Service are effective unless and until terminated by
						either you or us. You may terminate these Terms of Service at any
						time by notifying us that you no longer wish to use our Services, or
						when you cease using our site.
					</p>

					<p>
						If in our sole judgment you fail, or we suspect that you have
						failed, to comply with any term or provision of these Terms of
						Service, we also may terminate this agreement at any time without
						notice and you will remain liable for all amounts due up to and
						including the date of termination; and/or accordingly may deny you
						access to our Services (or any part thereof).
					</p>

					<h3> SECTION 17 - ENTIRE AGREEMENT</h3>

					<p>
						The failure of us to exercise or enforce any right or provision of
						these Terms of Service shall not constitute a waiver of such right
						or provision.
					</p>

					<p>
						These Terms of Service and any policies or operating rules posted by
						us on this site or in respect to The Service constitutes the entire
						agreement and understanding between you and us and govern your use
						of the Service, superseding any prior or contemporaneous agreements,
						communications and proposals, whether oral or written, between you
						and us (including, but not limited to, any prior versions of the
						Terms of Service).
					</p>

					<p>
						Any ambiguities in the interpretation of these Terms of Service
						shall not be construed against the drafting party.
					</p>

					<h3> SECTION 18 - GOVERNING LAW</h3>

					<p>
						These Terms of Service and any separate agreements whereby we
						provide you Services shall be governed by and construed in
						accordance with the laws of Montreal,QC, Montreal, QC, , Canada.
					</p>

					<h3> SECTION 19 - CHANGES TO TERMS OF SERVICE</h3>

					<p>
						You can review the most current version of the Terms of Service at
						any time at this page.
					</p>

					<p>
						We reserve the right, at our sole discretion, to update, change or
						replace any part of these Terms of Service by posting updates and
						changes to our website. It is your responsibility to check our
						website periodically for changes. Your continued use of or access to
						our website or the Service following the posting of any changes to
						these Terms of Service constitutes acceptance of those changes.
					</p>

					<h3> SECTION 20 - CONTACT INFORMATION</h3>

					<p>
						Questions about the Terms of Service should be sent to us at
						Doffyinc@gmail.com.
					</p>
				</Text>
			</View>
			<View style={style.appFooter}>
				<View style={CustomStyle.Link}>
					<Link to="/PrivacyPolicy" style={styles.textStyle}>
						Privacy Policy
					</Link>
					<View>
						<Text>© 2020 Doffy Inc.</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = {
	textStyle: {
		fontSize: 12,
	},
	viewStyle: {
		flex: 1,

		flexDirection: "row" as "row",
		alignItems: "center" as "center",
		justifyContent: "center" as "center",
	},
};
const style = StyleSheet.create({
	appFooter: {
		height: 100,
		justifyContent: "space-around",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "gray",
	},
});
