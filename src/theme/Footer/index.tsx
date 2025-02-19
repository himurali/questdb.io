import clsx from "clsx"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import customFields from "../../config/customFields"
import Button from "@theme/Button"
import sectionCss from "../../css/section.module.css"
import footerStyles from "./styles.module.css"

type Props = Readonly<{
	href?: string
	label: string
	to?: string
}>

const FooterLink = ({ to, href, label, ...props }: Props) => {
	const linkHref = useBaseUrl(href ?? "", { forcePrependBaseUrl: undefined })
	const linkTo = useBaseUrl(to ?? "")

	return (
		<a className={footerStyles.footer__link}
			{...(href != null
				? {
					href: linkHref,
					rel: "noopener noreferrer",
					target: "_blank",
				}
				: { href: linkTo })}
			{...props}
		>
			{label}
		</a>
	)
}

const Footer = () => {
	const { siteConfig } = useDocusaurusContext()
	const {
		themeConfig: {
			footer: { links },
		},
	} = siteConfig

	return (
		<footer className={clsx(footerStyles.footer, sectionCss.section)}>
			<div className={clsx(
				footerStyles.footer__inner,
				sectionCss["section--inner"],
			)}
			>
				<div className={clsx(
					footerStyles.footer__column,
					footerStyles["footer__column--left"],
				)}
				>
					<img
						alt="NNCF logo"
						className={footerStyles.footer__logo}
						src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1672749963/nncfwebdocu/1_dhafup.png"
						title="NNCF "
						width={108}
					/>
					<p className={footerStyles.footer__tagline}>{siteConfig.tagline}</p>
					<Button
						className={footerStyles.footer__github}
						href={customFields.githubUrl}
						icon={
							<img
								alt="NNCF logo"
								height={22}
								src="https://res.cloudinary.com/dsmfsfyci/image/upload/v1672749963/nncfwebdocu/2_lmakqk.png"
								title="GitHub"
								width={22}
							/>
						}
						size="xsmall"
						uppercase={false}
						variant="secondary"
					>
						Star us on GitHub
					</Button>
				</div>

				<div
					className={clsx(
						footerStyles.footer__column,
						footerStyles["footer__column--right"],
					)}
				>
					{links.map((linkItem, i) => (
						<div key={i} className={footerStyles.footer__links}>
							<ul className={footerStyles.footer__items}>
								{linkItem.title != null && (
									<li className={footerStyles.footer__title}>
										{linkItem.title}
									</li>
								)}
								{linkItem.items?.map((item) => (
									<li
										className={footerStyles.footer__item}
										key={item.href ?? item.to}
									>
										<FooterLink {...item} />
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className={footerStyles.footer__bottom}>
				<p className={footerStyles.footer__copyright}>
					{customFields.copyright}
					<ul>
						<li className={footerStyles.footer__item}>
							<a className={footerStyles.footer__link} href="/privacy-notice/">
								Privacy
							</a>
						</li>
					</ul>
					<ul>
						<li className={footerStyles.footer__item}>
							<a className={footerStyles.footer__link} href="/terms/">
								Terms
							</a>
						</li>
					</ul>
				</p>
			</div>
		</footer>
	)
}

export default Footer
