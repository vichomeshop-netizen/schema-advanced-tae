# Schema Advanced ES/PT — Theme App Extension

Theme App Extension para imprimir JSON-LD SSR (sin JS) compatible con cualquier tema.

## Estructura
- `extensions/schema-advanced/extension.config.yml`
- `extensions/schema-advanced/locales/{es,pt}.default.json`
- `extensions/schema-advanced/snippets/schema-helpers.liquid`
- `extensions/schema-advanced/blocks/{global,product,collection}-schema.liquid`

## Comandos
```bash
# Requisitos: npm i -g @shopify/cli @shopify/app  &&  shopify login

# Empareja con tu tienda de desarrollo y sube la extensión
shopify extension push

# Crea una versión (opcional, para lanzamiento)
shopify extension version create
```

## Activación en el tema
1. Editor de temas → **App embeds** → Activa **Global (Organization + WebSite)**.
2. Plantilla de **producto** → Añade **Product (JSON-LD)**.
3. Plantilla de **colección** → Añade **Collection (+FAQPage)** y define `custom.bloque_eeat` si usas ese metafield.
