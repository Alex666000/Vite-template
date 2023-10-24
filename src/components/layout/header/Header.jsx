import styles from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'

const Header = ({ backLink }) => {
	/* TODO: React router useHistory */
	const { isAuth } = useAuth()

	return <div className={styles.header}>Header</div>
}

export default Header
