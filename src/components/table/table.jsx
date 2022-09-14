import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import styles from './table.module.scss'
import moment from 'moment/moment';


const API_URL = 'https://api.github.com/repos/facebook/react/issues';

const Table = (props) =>{

    const { issuesList, isLoading } = useSelector(state => state.issues);

    return (
        <>
        <div className = {styles.card}>
            <div className = {styles.card_body}>
            
                {issuesList && issuesList.length > 0 ? issuesList.map((item,index)=>(
                    <div className = {styles.children_card} key={index}>
                        
                        <div className={styles.card_wrapper}>
                            
                            <img src={"/svgexport-25.svg"} width={16} height={16}></img>
                            
                            <div className={styles.details_flex}>

                                    <div className={styles.title_status_flex}>
                                        <div className={styles.title_text}>{item?.title ? item.title : ""}</div>
                                    
                                        {item?.labels ? 
                                            item.labels.map((label,index) =>(
                                            <div key={index} className={styles.label_pill} style={{
                                                backgroundColor: `#${label.color}`,
                                            }}> {label.name} </div>
                                                ))  : ""}
                                            </div>
                                    
                                    <div className={styles.details_text}>#{item?.number ? item.number : ""} opened {item?.created_at ? moment(item?.created_at).fromNow() + ' ago by ' : ''}{item?.user ? <a className={styles.link_text} href={item.user.html_url}>{item.user.login}</a> : ""}</div>
                                
                                
                                
                                {/* <div>
                                    {item?.milestone ? <span>{item.milestone}</span> : ""}
                                    
                                    
                                </div>
                                <div>
                                    {item?.user?.avatar_url ? <img src = {item.user.avatar_url} alt="Avatar" height={20} width={20}/> : ""}
                                </div> */}
                                

                                
                            </div>

                            
                        </div>
                        
                        {item?.comments && item.comments > 0 ? (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: "5px"
                            }}>
                                <img src="/svgexport-78.svg"></img> <div>{item.comments}</div>
                            </div> 
                        ) : (
                            <></>
                        )}
                        

                    </div> 
                ))
               : <></>}
            </div>
        </div>

        </>
    )
}


export default Table;