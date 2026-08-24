import { toast } from "react-toastify";
import actions from "../data/actions";

function ActionButtons() {
  const handleCopy = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied!", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
    } catch (error) {
      console.error("Copy failed:", error);
      toast.error("Could not copy. Please try again.");
    }
  };

  return (
    <section className="actions">
      {actions.map((item) => {
        const Icon = item.icon;

        // Copy action
        if (item.copy) {
          return (
            <button
              key={item.label}
              className="action-btn"
              type="button"
              onClick={() => handleCopy(item.copy, item.label)}
            >
              {Icon && <Icon />}
              <span>{item.label}</span>
            </button>
          );
        }

        // Link action
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

        // Button action
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