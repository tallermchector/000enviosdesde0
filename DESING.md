# Envíos DosRuedas Design System

## Visual Identity
*   **Brand Voice:** Empático, profesional, claro, colaborativo y resolutivo. Habla en primera persona del plural ("nosotros") para posicionarse como un socio estratégico del comerciante, transmitiendo cercanía humana y seguridad operativa sin tecnicismos fríos.
*   **Color Palette:**
    *   **Primary / Azul Conector (`#2D3277`):** Dominante (60%). Representa la solidez de la infraestructura, seguridad en los envíos y confianza corporativa.
    *   **Secondary / Amarillo Impulso (`#FFE600`):** Acento energético (20%). Transmite la alta energía del reparto rápido, dinamismo y optimismo.
    *   **Neutrals / Blanco y Grises (`#FFFFFF`, `#F3F4F6`, `#4B5563`):** Soporte (15%). Garantizan limpieza visual, fondos descansados y máxima legibilidad.
    *   **Success / Verde Éxito (`#00A650`):** Funcional (5%). Reservado para indicadores positivos como "Entregado" o "Pago Aprobado".
*   **Typography:**
    *   **Headings:** `Montserrat` (Pesos: Bold 700 / Black 900). Formas geométricas redondeadas que aportan solidez, presencia institucional y un carácter amigable.
    *   **Body Text:** `Inter` o `Roboto` (Pesos: Regular 400 / Medium 500). Diseñadas para interfaces móviles, optimizando la lectura de tarifas, reportes y códigos de seguimiento.
*   **Iconography:** Estilo *Duotone* o líneas estilizadas de grosor consistente (2px). Los iconos utilizan el Azul Conector para la estructura principal y sutiles toques de Amarillo Impulso para destacar la acción o el movimiento (ej. flechas de velocidad, paquetes abriéndose).

## Component Guidelines
*   **Buttons:**
    *   **Primary:** Fondo Amarillo Impulso (`#FFE600`), texto en Montserrat Bold Azul Conector (`#2D3277`). Sin borde. Corner radius de 8px (esquinas amigables pero estructuradas). Padding: 12px vertical, 24px horizontal.
    *   **Secondary:** Fondo transparente, borde de 2px Azul Conector (`#2D3277`), texto Azul Conector. Corner radius de 8px.
*   **Inputs:**
    *   **Default:** Fondo Blanco (`#FFFFFF`), borde de 1px gris claro (`#D1D5DB`), texto en Inter Regular. Corner radius de 6px.
    *   **Focus State:** Borde de 2px Azul Conector (`#2D3277`) con un sutil anillo de enfoque exterior (glow) en Amarillo Impulso diluido o gris suave para guiar la atención del usuario sin saturar.
*   **Cards:**
    *   **Style:** Fondo Blanco (`#FFFFFF`) con bordes suaves de 12px.
    *   **Shadow / Elevation:** Sombra sutil y difusa (Soft Shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05)`). Evita efectos tridimensionales pesados, manteniendo una estética plana, limpia y puramente digital.
*   **Navigation:**
    *   **Header:** Fondo Blanco (`#FFFFFF`) plano o con una fina línea inferior gris (`#E5E7EB`). Logo en versión horizontal a la izquierda, enlaces de navegación en Azul Conector (`#2D3277`) a la derecha. Botón de acción principal ("Cotizar Envío") destacado en amarillo.
    *   **Footer:** Bloque sólido en Azul Conector (`#2D3277`). Textos, enlaces institucionales y variaciones de logo aplicados íntegramente en Blanco (`#FFFFFF`) y Amarillo Impulso para garantizar contraste regulado.

## Layout & Spacing
*   **Grid:**
    *   **Desktop:** Sistema de 12 columnas con gutters (canales) de 24px.
    *   **Mobile:** Sistema de 4 columnas con gutters de 16px para optimizar interfaces de choferes y clientes en movimiento.
*   **Margins:**
    *   **Desktop:** Márgenes laterales estándar de 80px a 120px dependiendo del ancho máximo del contenedor (máx. 1440px).
    *   **Mobile:** Márgenes laterales fijos de 16px para aprovechar al máximo el espacio de lectura en pantallas pequeñas.
*   **Breakpoints:**
    *   **Mobile:** `< 640px`
    *   **Tablet:** `640px` a `1024px`
    *   **Desktop:** `> 1024px`

## Motion & Interactions
*   **Transitions:** Velocidad de respuesta rápida y orgánica de 200ms con una curva de aceleración estándar (`ease-in-out`). Aplicada a los estados *hover* de botones, enlaces y elevaciones sutiles de tarjetas al pasar el cursor.
*   **Animations:** Micro-interacciones sutiles para reforzar la confianza en la trazabilidad:
    *   **Checkmarks:** El icono Verde Éxito se dibuja de forma lineal y progresiva cuando un paquete cambia a estado "Entregado".
    *   **Loading States:** Spinners de carga circulares utilizando un degradado suave del Azul Conector, evitando saltos bruscos o animaciones robóticas agresivas.
