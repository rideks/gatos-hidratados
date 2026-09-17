import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Drawer de navegación para móvil. Recibe los mega-menús (uno por silo activo)
// y los enlaces primarios, ya derivados de la taxonomía (props serializadas).
export default function MobileDrawer({ menus = [], links = [] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100"
      >
        <Menu className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-4 h-16 border-b border-brand-200">
              <span className="font-display font-extrabold text-ink">Menú</span>
              <button aria-label="Cerrar menú" onClick={() => setOpen(false)} className="w-10 h-10 inline-flex items-center justify-center rounded-lg hover:bg-slate-100">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-8">
              {menus.map((menu) => (
                <div key={menu.id} className="space-y-4">
                  <a href={menu.path} className="block font-display font-bold text-lg text-ink">
                    {menu.label}
                  </a>
                  {menu.columns.map((col) => (
                    <div key={col.title}>
                      <p className="eyebrow mb-2">{col.title}</p>
                      <ul className="space-y-2">
                        {col.links.map((l) => (
                          <li key={l.href}>
                            <a
                              href={l.href}
                              className={l.more ? "text-brand-700 font-medium" : "text-slate-700 hover:text-brand-700"}
                            >
                              {l.name}{l.more ? " →" : ""}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}

              <div className="pt-2 border-t border-slate-100">
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="font-semibold text-slate-800 hover:text-brand-700">{l.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}