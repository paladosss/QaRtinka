import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader
	from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import File from '@vkontakte/vkui/dist/components/File/File';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import {platform, IOS} from '@vkontakte/vkui';
import PanelHeaderButton
	from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';
import ReactQr from 'react-awesome-qr';
import './Home.css'

const osName = platform();
const debounce = require('debounce');
const FileSaver = require('file-saver');

class Home extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			qrImage: 'https://static.vecteezy.com/system/resources/previews/000/074/969/non_2x/steve-jobs-vector.jpg',
			qrImageNew: '',
			qrText: 'https://vk.com/coin#t34158861',
			qrParams: {
				correctLevel: 3,
				size: 1000,
				dotScale: 0.4,
			},
		};
	}
	
	render() {
		const {id, go} = this.props;
		let {qrImage, qrImageNew, qrParams, qrText} = this.state;
		
		const changeText = (e) => {
			const text = e.target.value;
			
			debounce(this.setState({qrText: text}), 200);
		};
		
		const updateImage = (img) => {
			if (qrImageNew !== img) {
				this.setState({qrImageNew: img});
			}
		};
		
		const uploadFile = (e) => {
			let reader = new FileReader();
			
			reader.onloadend = () => {
				this.setState({qrImage: reader.result})
			};
			
			reader.readAsDataURL(e.target.files[0]);
		};
		
		const downloadImage = () => {
			FileSaver.saveAs(qrImageNew, "qr.png");
		};
		
		return (
			<Panel id={id} className="Home">
				<PanelHeader
					left={<PanelHeaderButton onClick={go} data-to="home">
						{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
					</PanelHeaderButton>}
				>
					QR код из картинки
				</PanelHeader>
				
				<Div>
					<Input type="text" defaultValue={qrText} onChange={changeText}/>
				</Div>
				
				<Div className="qrBlock">
					<Div className="picture">
						<img className="pictureImg" src={qrImage}
						     alt="picture"/>
					</Div>
					<Div className="qr">
						<ReactQr className="qrImg"
						         text={qrText}
						         bgSrc={qrImage}
						         callback={(img) => updateImage(img)}
						         {...qrParams}
						/>
					</Div>
				</Div>
				
				<Div className="downloadButton">
					<File top="Загрузите ваше изображение" before={<Icon24Camera/>}
					      size="l" onChange={uploadFile}>
						Открыть галерею
					</File>
				</Div>
				
				<Div className="downloadButton">
					<Button size="m" level="2" onClick={downloadImage}>
						Скачать QR-код
					</Button>
				</Div>
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
