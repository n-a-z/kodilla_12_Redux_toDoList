import React from 'react';
import styles from './Column.scss';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.string,
    cards: PropTypes.array,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div>
          {cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        {/*
        <div>
          <Creator
            text={settings.cardCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div>
        */}
      </section>
    );
  }
}

export default Column;
