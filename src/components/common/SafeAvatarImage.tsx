import classNames from 'classnames';
import avatar from 'assets/img/team/40x40/avatar.webp';
import { PropsWithChildren } from 'react';

export type Size = '5xl' | '4xl' | '3xl' | '2xl' | 'xl' | 'l' | 'm' | 's';
export type Variant = 'image' | 'name' | 'emoji';
export type Rounded = 'circle' | 'square' | 'soft';
export type Status = 'online' | 'offline' | 'away' | 'do-not-disturb';

interface SafeAvatarImageProps {
  size: Size;
  src?: string;
  variant?: Variant;
  rounded?: Rounded;
  status?: Status;
  placeholder?: boolean;
  thumbnail?: boolean;
  imageClassName?: string;
  className?: string;
}

const SafeAvatarImage = ({
  size,
  src,
  rounded = 'circle',
  status,
  className,
  imageClassName,
  thumbnail,
  placeholder
}: PropsWithChildren<SafeAvatarImageProps>) => {
  return (
    <div
      className={classNames(className, `avatar avatar-${size}`, {
        [`status-${status}`]: status
      })}
    >
      <img
        src={src ? src : avatar}
        alt="avatar"
        className={classNames(imageClassName, {
          'img-thumbnail bg-body-emphasis': thumbnail,
          'avatar-placeholder': !src || placeholder,
          'rounded-circle': rounded === 'circle',
          'rounded-soft': rounded === 'soft'
        })}
        onError={e => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = avatar;
          target.classList.add('bg-white', 'rounded-5');
        }}
      />
    </div>
  );
};

export default SafeAvatarImage;
