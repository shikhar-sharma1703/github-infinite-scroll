import React from 'react'
import styles from "./issues-table.module.scss"
import Table from '../table/table.jsx';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

function IssuesTable() {

const isMobile = useCheckMobileScreen();

  return (
    <>

        {
            isMobile ? (
                <div className={styles.open_closed_issues}>

                    <img src={"/svgexport-57.svg"}></img>
                    <div className={styles.open_issues_text}>783 Open</div>
                    <img src={"/svgexport-71.svg"}></img>
                    <div className={styles.closed_issues_text}>10,916 Closed</div>
                </div>
                ) : 
                
                (
                <></>
                )
        }
        <div className={styles.table_wrapper}>
        <div className={styles.table_header}>
            {
                !isMobile ? (
                    <div className={styles.open_closed_issues}>
                        <img src={"/svgexport-57.svg"}></img>
                        <div className={styles.open_issues_text}>783 Open</div>
                        <img src={"/svgexport-71.svg"}></img>
                        <div className={styles.closed_issues_text}>10,916 Closed</div>
                    </div>
                ) : (<></>)
            }
            

            <div className={styles.filter_issues}>
                <div className={styles.individual_filter}>
                    <span className={styles.filter_issues_text}>Author</span>
                    <img src={"/svgexport-52.svg"}></img>
                </div>

                <div className={styles.individual_filter}> 
                    <span className={styles.filter_issues_text}>Label</span>
                    <img src={"/svgexport-52.svg"}></img>
                </div>

                <div className={styles.individual_filter}>
                    <span className={styles.filter_issues_text}>Projects</span>
                    <img src={"/svgexport-52.svg"}></img>
                </div>

                <div className={styles.individual_filter}>
                    <span className={styles.filter_issues_text}>Milestones</span>
                    <img src={"/svgexport-52.svg"}></img>
                </div>

                {
                    !isMobile ? (
                        <>
                            <div className={styles.individual_filter}>
                                <span className={styles.filter_issues_text}>Assignee</span>
                                <img src={"/svgexport-52.svg"}></img>
                            </div>

                            <div className={styles.individual_filter}>
                                <span className={styles.filter_issues_text}>Sort</span>
                                <img src={"/svgexport-52.svg"}></img>
                            </div>
                        </>
                    ) : (
                        <></>
                    )
                }
                
            </div>
        </div>

        <Table/>
        </div>
    </>
  )
}

export default IssuesTable
