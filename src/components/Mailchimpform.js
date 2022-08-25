import MailchimpSubscribe from "react-mailchimp-subscribe";
import { NewsLetter } from "./newsletter";


export const MailchimpForm = () => {
    
    // const url = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
    const url = "https://gmail.us18.list-manage.com/subscribe/post?u=84c8371cc9cf8212589f781bc&amp;id=97ad964b4b";

    return (
        <MailchimpSubscribe 
         url={url} 
         render={({ subscribe, status, message }) => (
            <NewsLetter
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
            />
          )}
         />
      
  )
}
