import LineTitle from "components/LineTitle";


function ContactItem({title, content}) {
    return (
        <div className="item">
            <h3>{title}</h3>
            <div>{content}</div>
        </div>
    )
}
export default function Contact() {
    const contactList = [
        {
            title : "phone",
            content : "010-5736-6491"
        },{
            title : "github",
            content : "https://github.com/kinsanghun"
        },{
            title : "tistory",
            content : "https://develophun.tistory.com/"
        },{
            title : "email",
            content : "schmid_t@kakao.com"
        }
    ]

    const items = contactList.map(data => <ContactItem 
        key={data.title} 
        title={data.title}
        content={data.content}
    />)
    return (
        <div className="contact">
            <LineTitle title={"contact"}/>
            <div className="items">{items}</div>
        </div>
    )
}