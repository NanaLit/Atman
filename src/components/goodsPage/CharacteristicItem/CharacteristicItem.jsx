import RedDot from './../../RedDot/RedDot.jsx';

import styles from './CharacteristicItem.module.scss';

const CharacteristicItem = ({ value }) => {
	if (!value) return null;
	const [label, info] = value.split(':');

	return (
		<li className={styles.item}>
			<div className={styles.redDot}>
				<RedDot />
			</div>
			<p className={styles.itemText}>
				{label}
				{info && ':'}
				<span>{info}</span>
			</p>
		</li>
	);
};

export default CharacteristicItem;
