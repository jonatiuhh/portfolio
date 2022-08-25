import { Container, Row, Col, Alert } from 'react-bootstrap';
import { MailchimpForm } from './Mailchimpform';
import Logo from "../assets/img/code.svg";
import navIcon1 from '../assets/img/github-icon.svg';
import navIcon2 from '../assets/img/whats2.svg';
import navIcon3 from '../assets/img/mail.svg';
import NavIcon4 from '../assets/img/pdf.svg';
import { MailChimpSimple } from './newlettersimple';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import toast, { Toaster } from 'react-hot-toast';





export const Footer =() =>{


	return(
		<footer className="footer" id='footer'>
			<Container>
				<Row className='align-items-center'>
					<MailchimpForm />
					<Col sm={6}>
						<img src={Logo} alt="Logo" />
					</Col>
					<Col sm={6} className="text-center text-sm-end">
						<p className='contact-js'> Contact </p>
						  <div className='social-icon'>
							  <a href='https://github.com/jonatiuhh' target="_blank" ><img src={navIcon1} /></a>
								<a href="https://drive.google.com/file/d/1-ToAJluVMTBdHF0rhkojEc-xRC3Igh3w/view?usp=sharing" target='_blank' ><img src={NavIcon4} alt="" /></a>
							<CopyToClipboard text='3320897284'>
								  <a onClick={ () => toast('number copied',{position: 'bottom-center'})}><img src={navIcon2} /></a>
							</CopyToClipboard>
							<CopyToClipboard text='jonathan.sesma@outlook.com'>
							    <a onClick={ () => toast('mail copied',{position: 'bottom-center'})}><img src={navIcon3} /></a>
							</CopyToClipboard>
							<Toaster/>
						  </div>
						<p>CopyRight 2022. All Right Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}