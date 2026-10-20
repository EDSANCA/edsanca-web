# Cómo editar tu web sin saber programar

## Añadir o cambiar un proyecto

Cada proyecto es un archivo en `src/content/projects/`. Para editarlo en GitHub: abre el archivo, pulsa el lápiz, cambia el texto y pulsa **Commit changes**. La web se actualiza sola en un par de minutos.

```
---
title: Melting Icon            ← nombre del proyecto
client: Magnum                 ← marca o cliente
year: 2024                     ← año (opcional, puedes borrar la línea)
category: advertising          ← advertising, music-video, fiction, personal o branded
summary_en: Texto en inglés.   ← una o dos frases
summary_es: Texto en español.
youtube: dQw4w9WgXcQ           ← solo el código del vídeo (lo que va después de watch?v=)
stack: [Runway, Seedance]      ← herramientas o roles (opcional)
featured: false                ← true = aparece grande arriba en la home (solo uno)
order: 10                      ← orden: números más bajos salen antes
draft: false                   ← true = el proyecto se oculta sin borrarlo
---

Aquí abajo puedes escribir el caso completo: el brief, la idea, cómo se hizo y el resultado.
```

Para un proyecto nuevo, copia uno existente, cámbiale el nombre de archivo (en minúsculas y con guiones, por ejemplo `lexus-atp-turin.md`) y rellena los datos.

## Si algo se rompe

Pídeselo a Claude. Cada cambio queda guardado en el historial de GitHub y se puede deshacer.
