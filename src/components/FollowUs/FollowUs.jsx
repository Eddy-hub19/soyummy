import sprite from '../../images/sprite.svg';
import { FolowUsTitle, IconsFolowUs } from './FollowUs.styled';

export const FollowUs = ({ text }) => {
  return (
    <>
      <FolowUsTitle>{text}</FolowUsTitle>
      <IconsFolowUs>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width={20} height={20}>
            <use href={sprite + '#icon-fb'}></use>
          </svg>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width={20} height={20}>
            <use href={sprite + '#icon-youtube'}></use>
          </svg>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width={20} height={20}>
            <use href={sprite + '#icon-tweeter'}></use>
          </svg>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width={20} height={20}>
            <use href={sprite + '#icon-insta'}></use>
          </svg>
        </a>
      </IconsFolowUs>
    </>
  );
};
