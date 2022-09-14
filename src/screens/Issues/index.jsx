import React, {useEffect} from 'react'
import IntroMenu from '../../components/intro-menu'
import { useDispatch, useSelector } from 'react-redux'
import {getGihtubIssuesSendRequest} from './issues-redux/issues-redux-action'
import { loadMoreIssuesSendRequest } from './issues-redux/issues-redux-action'
import styles from './issues.module.scss'
import IssuesTable from '../../components/issues-table'
import { Spinner } from "react-activity";
import Nav from "../../components/navbar/nav.jsx"
import "react-activity/dist/library.css";


function IssuesPage() {

  const dispatch = useDispatch()

  const {isLoading, pageNumber } = useSelector(state => state.issues);

  useEffect(() => {
    getGihtubIssuesSendRequest(dispatch);
  }, [])

  useEffect(() => {
    window.onscroll = () => {
      if (Math.abs((window.innerHeight + window.scrollY) - document.body.offsetHeight) <= 1) {
        if(isLoading === false) {
          loadMoreIssuesSendRequest(dispatch, pageNumber);
        }
      } 
    }
  }, [pageNumber])

  return (

    <>
        <div>
        <IntroMenu />
        <Nav />
        <IssuesTable />
        {
          isLoading ? <div className={styles.centre_loader}>
            <Spinner size={16} color="#000" speed={1} animating={true} />
          </div> : <></>
        }
      </div>
    </>
  )
}

export default IssuesPage