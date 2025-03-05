# Números Complejos<br>

## Definición:

Un número complejo es un par ordenado de números reales $$(a,b)$$.
Le llamamos parte real a $$"a"$$ y parte imaginaria a $$"b"$$
<br>

Sean $$(a,b)$$ y $$(c,d)$$ dos números complejos:

1. Decimos que
   $$(a, b) = (c, d) \iff a = b \land c = d$$
2. Definimos la **suma**: $$(a, b) + (c, d) = (a + c , b + d)$$
3. Definimos el **producto**: $$(a, b)(c, d) = (ac - bd, ad + bc)$$
<br><br>
```chart
{
  "type": "scatter",
  "data": {
    "datasets": [{
      "label": "Número Imaginario (a, b)",
      "data": [{
        "x": 3,
        "y": 4
      }],
      "backgroundColor": "tomato"
    }]
  },
  "options": {
    "responsive": true,
      "plugins": {
      "legend": {
        "display": false
      }
    },
    "scales": {
      "x": {
        "type": "linear",
        "position": "bottom",
        "title": {
          "display": true,
          "text": "Parte Real"
        },
        "min": -8,
        "max": 8,
        "grid":{
            "display":true
        },
        "ticks": {
            "display":false
        }
      },
      "y": {
        "type": "linear",
        "title": {
          "display": true,
          "text": "Parte Imaginaria"
        },
        "min": -8,
        "max": 8 ,
        "grid":{
            "display":true
        },"ticks": {
            "display":false
        }
      }
    }
  }
}
```
<br>

**Obeservación:**
$$(0,1)(0,1)=(0-1,0+0)=(-1,0)$$
Vamos a denotar $$i=(0,1)$$
$$(a,b)=(a,0)+(0, b)=a(1,0)+b(0,1) = a + bi$$ <br>
**Notación binómica** de un complejo: $$a+bi$$<br><br>

**Defnición:** (módulo y argumento)
Dado un complejo $$z=a+bi$$ definimos:
- su **módulo** $$|z|=\sqrt{a^2+b^2}$$
- su **argumento** $$(\theta)$$  como el ángulo que forma el módulo con el eje real

<br>

**Ejemplo 1:**
$$z=1 + i$$
$$|z|=\sqrt{1^2+1^2}=\sqrt{2}$$
$$\theta = \arctan(\frac{b}{a}) = \arctan(\frac{1}{1}) =  \arctan{1} = \frac{\pi}{4} $$<br>

**Ejemplo 2:**
$$z=-1 - i$$
$$|z|=\sqrt{(-1)^2+(-1)^2}=\sqrt{2}$$
$$\theta = \arctan(\frac{-1}{-1}) =  \arctan{1} = \frac{\pi}{4} $$

```chart
{
  "type": "scatter",
  "data": {
    "datasets": [{
      "label": "1 + i",
      "data": [{
        "x": 3,
        "y": 4
      }],
      "backgroundColor": "tomato"
    },
    {
      "label":"-1 - i",
      "data": [{
        "x": -3,
        "y": -4
      }],
      "backgroundColor": "cyan"
    }]
  },
  "options": {
    "responsive": true,
      "plugins": {
      "legend": {
        "display": false
      }
    },
    "scales": {
      "x": {
        "type": "linear",
        "position": "bottom",
        "title": {
          "display": true,
          "text": "Parte Real"
        },
        "min": -8,
        "max": 8,
        "grid":{
            "display":true
        },
        "ticks": {
            "display":false
        }
      },
      "y": {
        "type": "linear",
        "title": {
          "display": true,
          "text": "Parte Imaginaria"
        },
        "min": -8,
        "max": 8 ,
        "grid":{
            "display":true
        },"ticks": {
            "display":false
        }
      }
    }
  }
}
```
<br>

De los ejemplos 1 y 2 vemos que hallar los números complejos con arco tangente puede llevar a este error, ya que resultan en los mismos valores siendo complejos diferentes. Para resolver debemos ver el cuadrante en el que sea encuentra y ajustar sumando o restando $$\pi$$


<br><br>


## Pasar de notación (a, b) a módulo y argumento, y viceversa.
<br>

$$|z|=\sqrt{a^2+b^2}$$
$$\theta = \arctan(\frac{b}{a})$$ (con la precaución de el cuadrante)

<br>

$$a= |z|.\cos(\theta)$$
$$b= |z|.\sin(\theta)$$
<br><br>

---

<br>