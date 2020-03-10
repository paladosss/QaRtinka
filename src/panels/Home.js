import React from 'react';
import PropTypes from 'prop-types';

import bridge from '@vkontakte/vk-bridge';
import {platform, IOS} from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader
	from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import File from '@vkontakte/vkui/dist/components/File/File';
import Textarea from '@vkontakte/vkui/dist/components/Textarea/Textarea';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import Icon24Document from '@vkontakte/icons/dist/24/document';
import ReactQr from 'react-awesome-qr';
import './Home.css'

const osName = platform();
const jobs = require('../img/jobs.jpg');
const db = require('just-debounce');

// const FileSaver = require('file-saver');

class Home extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			qrImage: jobs,
			qrImageNew: '',
			qrParams: {
				text: `Steven Paul «Steve» Jobs - Apple`,
				correctLevel: 3,
				dotScale: 0.4,
				size: 1000,
				margin: 20,
				whiteMargin: true,
				colorDark: "#000000",
				colorLight: "#ffffff",
				autoColor: true,
				maskedDots: false,
				backgroundDimming: 'rgba(0,0,0,0)',
				gifBackground: undefined,
				logoImage: undefined,
				logoScale: 0.2,
				logoMargin: 6,
				logoCornerRadius: 8,
				binarize: false,
				binarizeThreshold: 128,
			},
		};
	}
	
	render() {
		const {id} = this.props;
		let {qrImage, qrImageNew, qrParams} = this.state;
		const {text} = qrParams;
		
		const changeParams = (e, key) => {
			let value;
			if (e.target) {
				const newValue = e.target.value;
				value = newValue.length ? newValue : '';
			} else if (e) {
				value = e;
			}
			
			db(this.setState(state => {
				const qrParams = {...state.qrParams};
				
				qrParams[key] = value;
				
				return {qrParams};
			}), 1000);
		};
		
		const updateImage = (img) => {
			if (qrImageNew !== img) {
				db(this.setState({qrImageNew: img}), 1000);
			}
		};
		
		const uploadFile = (e) => {
			let reader = new FileReader();
			
			reader.onloadend = () => {
				db(this.setState({qrImage: reader.result}), 1000);
			};
			
			reader.readAsDataURL(e.target.files[0]);
		};
		
		const downloadImage = () => {
			bridge.send("VKWebAppShowStoryBox", {
				"background_type": "image",
				"blob": "data:image/png;base64,<blob-base64>" + qrImageNew,
			});
			
			// FileSaver.saveAs(qrImageNew, "qr.png", {autoBom: true});
		};
		
		const openCodeReader = () => {
			bridge.send("VKWebAppOpenCodeReader", {});
		};
		
		const donation = () => {
			const donationLink = 'https://vk.com/vkpay#action=transfer-to-user&user_id=34158861&from_qr=1';
			
			changeParams(donationLink, 'text');
		};
		
		return (
			<Panel id={id} className="Home">
				<PanelHeader
				>
					QR код из картинки
				</PanelHeader>
				
				<Div>
					<Textarea type="text"
					          top="Введите текст, который будет зашифрован в QR-коде"
					          placeholder="Введите текст, который будет зашифрован в QR-коде"
					          value={text}
					          onChange={(e) => changeParams(e, 'text')}
					          rows={1}
					          maxLength={110}
					/>
				</Div>
				
				<Div className="qrBlock">
					<Div className="picture">
						<img className="pictureImg" src={qrImage}
						     alt="picture"/>
					</Div>
					<Div className="qr">
						<ReactQr className="qrImg"
						         bgSrc={qrImage}
						         callback={img => updateImage(img)}
						         {...qrParams}
						/>
					</Div>
				</Div>
				
				<Div className="downloadButton">
					<File top="Загрузите ваше изображение" before={<Icon24Camera/>}
					      size="l" onChange={uploadFile}>
						Загрузить своё изображение
					</File>
				</Div>
				<Div className="downloadButton">
					<Button size="m" level="2" onClick={openCodeReader}>
						Сканировать QR-код
					</Button>
				
				</Div>
				
				<Div className="downloadButton">
					<Button size="m" level="2" onClick={downloadImage}
					        before={<Icon24Document/>}>
						Скачать QR-код
					</Button>
				</Div>
				{osName !== IOS &&
				<Div className="downloadButton">
					<Button size="m" level="2" onClick={donation}>
						Ссылочка на донат
					</Button>
				</Div>}
			</Panel>
		)
	}
}

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
