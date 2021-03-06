import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengeContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/8830095?s=400&u=ce5a57750c213ab620a6d26aa8022fd8486a4fc7&v=4" alt="Elcio Sato"/>
            <div>
                <strong>Elcio Sato</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level} 
                </p>
            </div>
        </div>
    );
}