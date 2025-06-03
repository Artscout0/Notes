# Magnetic flux

Magnetic flux is a measure of the total magnetic field passing through a given surface or loop. It quantifies how much of the magnetic field "flows" through an area.

---

## How to calculate it

### Basic way

$$\phi = B \cdot S \cdot N \cdot \sin(\alpha)$$

Where:
- $B$ is the magnetic field strength \[T],
- $S$ is the surface area through which the field lines pass \[$\text{m}^2$],
- $N$ is the number of loops (turns) of the coil or conductor,
- $\alpha$ is the angle between the magnetic field vector and the normal (perpendicular) to the surface,
- $\phi$ is the magnetic flux \[Wb]

#### Notes
- If the magnetic field is **perpendicular** to the surface, then $\sin(\alpha) = 1$ and flux is maximized: $\phi = B \cdot S \cdot N$
- If the magnetic field is **parallel** to the surface, then $\sin(\alpha) = 0$ and $\phi = 0$

---

### Alternative (basic) form

If there's only a single flat surface and no coil:

$$\phi = B \cdot S \cdot \cos(\alpha)$$

Where:
- $\alpha$ is the angle between the magnetic field and the **surface itself** (not the normal),
- This version is mathematically equivalent but used in different conventions.

---

### Through inductance

$$\phi = L \cdot I$$

Where:
- $I$ is the current flowing through the contour \[A],
- $L$ is the electromagnetic inductance \[H],
- $\phi$ is the magnetic flux \[Wb]