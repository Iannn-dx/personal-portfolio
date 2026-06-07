export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  href,
  download,
  children,
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center justify-center";

  const variantClasses = {
    primary:
      "bg-primary text-background hover:bg-primary/90 shadow-lg shadow-primary/25",
    outline:
      "bg-transparent border border-primary text-foreground shadow-none hover:bg-primary/10",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const content = (
    <span className="relative flex items-center justify-center gap-2">{children}</span>
  );

  if (href) {
    return (
      <a href={href} download={download} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};
