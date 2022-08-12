import { useRouter } from "next/router";
import Link from "next/link";
import PropTypes from "prop-types";

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

interface Props {
  href: string;
  exact?: boolean;
  children: any;
  props?: any;
  className: string;
}

function NavLink({
  href,
  exact = false,
  children,
  className,
  ...props
}: Props) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    className += " active";
  }

  return (
    <Link href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </Link>
  );
}
