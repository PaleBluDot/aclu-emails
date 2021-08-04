# ACLU Email Production VS Code Folder

The purpose of this folder is to make a shareable VS codes settings that will be useful to those prdocuing ACLU email.

## Recomended Extentions

1. code-spell-checker
2. htmlhint

## Snippets

There is a file with snippets that are useful for our email builds. This section will outline what varibale you have to use to get the snippet to show up.

### Button

Call this by using `cta` and pressing tab.

```html
<!-- START CTA BUTTON, make sure to update both links and adjust both widths as needed -->
<table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
	<tr>
		<td align="center" style="margin: 20px 0 20px 0;">
			<table role="presentation" border="0" cellspacing="0" cellpadding="0">
				<tr>
					<td align="center" bgcolor="#ef404d">
						<a role="button" class="button-text" href="{affiliate_website}" style="font-family: Arial, sans-serif; color: #ffffff; padding: 12px 18px; border: 1px solid #ef404d; display: inline-block;font-size:18px;font-weight:bold;text-align:center;text-decoration:none;text-transform: uppercase;">Take Action</a>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
<br />
<!-- END CTA BUTTON -->
```

### Banner Image

```html
<!-- START CENTERED IMAGE -->
<div align="center">
	<a href="{affiliate_website}"><img src="https://media.sailthru.com/64p/1k3/9/r/5d8e71d74accd.jpg" width="600" class="image-resize" border="0" alt="You're invited!" /></a>
</div>
<br />
<!-- END CENTERED IMAGE -->
```
