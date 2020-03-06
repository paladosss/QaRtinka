import React from 'react';
import PropTypes from 'prop-types';
import ReactQr from 'react-awesome-qr';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import sem from '../img/sem.jpg';
import './Persik.css';

const osName = platform();
const qrParams = {
	text: 'Сёма, с ДР!',
	bgSrc: sem,
	correctLevel: 3,
	size: 500,
	dotScale: 0.4,
}

const Persik = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</PanelHeaderButton>}
		>
			Persik
		</PanelHeader>
		<img className="Persik" src={sem} alt="Persik The Cat"/>
		<Div>{qrParams.text}</Div>
		<ReactQr {...qrParams} />
	</Panel>
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
