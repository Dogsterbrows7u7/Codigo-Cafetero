document.addEventListener("DOMContentLoaded", () => {
    // Inject dropdown CSS dynamically
    const style = document.createElement("style");
    style.innerHTML = `
        .nav-item-dropdown {
            position: relative;
        }
        .nav-link-dropdown {
            cursor: pointer;
        }
        .dropdown-submenu {
            display: none;
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(8px);
            list-style: none;
            padding: 0.5rem 0;
            margin: 0;
            margin-top: 10px;
            min-width: 220px;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.15);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease, margin-top 0.3s ease;
        }
        .nav-item-dropdown.active .dropdown-submenu {
            display: block;
            opacity: 1;
            margin-top: 0;
        }
        .dropdown-submenu li::before {
            content: ''; /* remove list bullets if any */
        }
        .dropdown-submenu li {
            padding: 0 0.5rem;
            margin: 0.2rem 0;
        }
        .dropdown-submenu a {
            color: #6F1D1B !important;
            padding: 0.6rem 1rem;
            display: block;
            border-radius: 8px;
            text-align: center;
            font-size: 0.95rem;
        }
        .dropdown-submenu a::after {
            display: none; /* override root menu setting */
        }
        .dropdown-submenu a:hover {
            background: #FBEED7;
        }
    `;
    document.head.appendChild(style);

    // Setup interactivity
    const dropdowns = document.querySelectorAll('.nav-item-dropdown');

    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('.nav-link-dropdown');
        
        // Prevent default click and toggle active state
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // close any other active dropdowns first
            dropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });

            dropdown.classList.toggle('active');
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
});
