import * as React from 'react';
import styles from './SpFxHttpClientDemo.module.scss';
import type { ISpFxHttpClientDemoProps } from './ISpFxHttpClientDemoProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpFxHttpClientDemo extends React.Component<ISpFxHttpClientDemoProps> {
  public render(): React.ReactElement<ISpFxHttpClientDemoProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName,
      spListItems
    } = this.props;
    
    return (
      <section className={`${styles.spFxHttpClientDemo} ${hasTeamsContext ? styles.teams : ''}`}>
        <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div>
        <div className={styles.buttons}>
          <button type="button" onClick={this.onGetListItemsClicked}>Get Countries</button>
        </div>
        <div>
          <ul>
            {spListItems && spListItems.map((list) =>
              <li key={list.Id}>
                <strong>Id:</strong> {list.Id}, <strong>Title:</strong> {list.Title}
              </li>
            )
            }
          </ul>
        </div>
      </section>
    );
  }

  private onGetListItemsClicked = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    if (this.props.onGetListItems) this.props.onGetListItems();
  }

}
