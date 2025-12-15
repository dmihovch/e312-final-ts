import PageLayout from "../components/PageLayout";
import OfficeMemoPDF from "../assets/writing-pieces/MemoReturn.pdf";
export default function OfficeMemo() {
	return (
		<PageLayout
			title="Memo - Return to Office"
			pathToFile={OfficeMemoPDF}
			intro="
		This piece is a memo being sent out to my fictional company, detailing a plan for returning to the office after an extended period of time doing remote work. Writing this piece came with certain challenges: how do you sound professional and certain, but remain human? How do you handle the chance that a memo can (and probably will be) leaked to the public? When writing a memo, I instinctively thought to write strictly to the employees, treating them as my sole audience. This felt genuine and caring. The challenge came in when considering whether the public would get a hold of the memo or not. This essentially shifts the audience of the memo to a more global one, and you have to adjust accordingly. While the public won’t actually derive any use or direction from the memo, public opinion is a big deal, so you have to keep in mind to cater to that audience. I think where I fell short in this approach was I relied too much on ‘my voice’. I believe that, if you don’t know me, some of the statements could come off as uncaring or crass."
		/>
	);
}
