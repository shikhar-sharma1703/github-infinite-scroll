import React from 'react';
import styles from "./intro-menu.module.scss"

function IntroMenu() {
  return (
    <>
        <div className={styles.intro_menu_wrapper}>
            <div className={styles.oragnization_repo_details}>
                <img src="/Repository.svg" />
                <div className={styles.repo_details}>
                    <span className={styles.org_name}>facebook </span>
                    /
                    <span className={styles.repo_name}> react</span>
                </div>
                <div className={styles.privacy_button}>Public</div>
            </div>

            <div className={styles.buttons_wrapper}>
                <div className={styles.notifications_button}>
                    <img src="/Notification.png"  height={16} width={16}/>
                    <span>Notifications</span>
                </div>

                <div className={styles.info_button}>
                    <div className={styles.icon_title}>
                        <img src="/svgexport-55.svg"  height={16} width={16}/>
                        <div>Star</div>
                    </div>
                    <span className={styles.icon_description}>
                        175K
                    </span>
                </div>

                <div className={styles.info_button}>
                    <div className={styles.icon_title}>
                        <img src="/svgexport-51.svg"  height={16} width={16}/>
                        <div>Forks</div>
                    </div>
                    <span className={styles.icon_description}>
                        35.3K
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default IntroMenu