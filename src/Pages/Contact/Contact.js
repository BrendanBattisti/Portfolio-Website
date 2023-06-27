
import Page from "../Page/Page"
import linkedIn from "../../img/Links/LI-In-Bug.png"
import github from "../../img/Links/github-mark-white.png"
export default function Contact() {
    const content = <div class="social_links">
    Check me out!
    <a href="https://github.com/BrendanBattisti" target="_blank">
        <img src={github} />
    </a>

    <a href="https://www.linkedin.com/in/brendan-battisti-0a548785/" target="_blank">
        <img src={linkedIn} />
    </a>

</div>
    // Other color: #FCF6F5FF
    return <Page content={content} name="Contact" backgroundColor="#2BAE66FF"/>
}