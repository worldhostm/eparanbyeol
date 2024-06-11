import Link from 'next/link'
import React, { Fragment } from 'react'
import styles from './header.module.css';

export default function Header() {
  return (
    <Fragment>
        <div className={styles.container}>
            <Link href={'/intro'}>intro</Link>
            <Link href={'/leaflet'}>leaflet</Link>
        </div>
    </Fragment>
  )
}
