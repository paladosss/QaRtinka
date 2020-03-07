import React from 'react';
import PropTypes from 'prop-types';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader
	from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import {platform, IOS} from '@vkontakte/vkui';
import PanelHeaderButton
	from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import ReactQr from 'react-awesome-qr';

import './Home.css'

const osName = platform();

const Home = ({id, go, fetchedUser}) => {
	let qrImage;
	const qrParams = fetchedUser && {
		text: `${fetchedUser.first_name} ${fetchedUser.last_name} - лучший человек!`,
		correctLevel: 3,
		size: 1000,
		dotScale: 0.4,
		callback: (data) => {
			qrImage = data;
		}
	};
	
	const download = () => {
		console.log(qrImage);
		
		const a = document.createElement("a");
		a.href = qrImage;
		a.download = "qr.png";
		a.click();
	};
	
	return fetchedUser && (
		<Panel id={id} className="Home">
			<PanelHeader
				left={<PanelHeaderButton onClick={go} data-to="home">
					{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
				</PanelHeaderButton>}
			>
				QR код из картинки
			</PanelHeader>
			
			<Div className="qrBlock">
				<Div className="avatar">
					<img className="avatarImg" src={fetchedUser.photo_max_orig} alt="avatar"/>
				</Div>
				<Div className="qr">
					<ReactQr className="qrImg" bgSrc={fetchedUser.photo_200} {...qrParams} />
				</Div>
			</Div>
			
			<Div className="downloadButton">
				<Button size="m" level="2" onClick={download} data-to="qr">
					Скачать QR-код
				</Button>
			</Div>
		</Panel>
	)
};

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
