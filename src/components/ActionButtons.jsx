import actions from "../data/actions";

function ActionButtons() {
  return (
    <section className="actions">
      {actions.map((item) => {
        const Icon = item.icon;

        if (item.href) {
          return (
            <a
              key={item.label}
              className="action-btn"
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
            >
              {Icon && <Icon />}
              <span>{item.label}</span>
            </a>
          );
        }

        return (
          <button
            key={item.label}
            className="action-btn"
            type="button"
            onClick={item.action}
          >
            {Icon && <Icon />}
            <span>{item.label}</span>
          </button>
        );
      })}
    </section>
  );
}

export default ActionButtons;