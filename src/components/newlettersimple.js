import MailchimpSubscribe from "react-mailchimp-subscribe"

export const MailChimpSimple = () =>{

const url = "https://gmail.us18.list-manage.com/subscribe/post?u=84c8371cc9cf8212589f781bc&amp;id=97ad964b4b";

const SimpleForm = () => <MailchimpSubscribe url={url}/>

return (
   <SimpleForm>
   </SimpleForm>
 )
}