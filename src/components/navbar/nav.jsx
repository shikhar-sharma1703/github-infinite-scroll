import React, {useState} from 'react'
import styles from './secondary-nav.module.scss'


function Nav() {

    const [listNav,setListNav] = useState([
        ['Code','/svg-assets/svgexport-18.svg'],
        ['Issues', '/svg-assets/svgexport-19.svg', '783'],
        ['Pull requests', '/svg-assets/svgexport-20.svg'],
        ['Actions', '/svg-assets/svgexport-21.svg'],
        ['Projects', '/svg-assets/svgexport-22.svg'],
        ['Wiki', '/svg-assets/svgexport-23.svg'],
        ['Security', '/svg-assets/svgexport-24.svg'],
        ['Insights', '/svg-assets/svgexport-25.svg'],
    ]);

  return (

    <>
    <div className={styles.navbar_wrapper} >
        
        {listNav.map((item, index) => (
            <div key={index} className={styles.navbar_item}>

                <div style={{ paddingLeft: 10,paddingRight: 10, display: 'flex', alignItems: 'center', justifyItems: 'center', height: '55px', borderBottom: index === 1 ? '2px solid #eb8c73': '2px solid #f6f8fa'}}>
                <img style={{ paddingLeft: 2, paddingRight: 10 }} src={item[1]} alt='' />
                <span>{item[0]}</span>
                <div style={{fontWeight: 400, marginLeft: 5,paddingRight:5 ,borderRadius: 5, alignItems: 'center', backgroundColor: 'rgba(175, 184, 193, 0.2)' }}>{item[2]}</div>
                </div>
            
            </div>
        ))}

    </div>
    </>
  )
}

export default Nav;