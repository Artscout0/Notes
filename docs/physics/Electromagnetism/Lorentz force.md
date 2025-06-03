# Lorentz Force

The **Lorentz force** is the total force experienced by a charged particle moving in electric and magnetic fields. It’s a combination of electric and magnetic effects.

---

## Scalar version (magnetic part only)

$$F_L = B \cdot q \cdot v \cdot \sin(\alpha)$$

Where:
- $B$ is the strength of the magnetic field \[T],
- $q$ is the electric charge of the particle \[C],
- $v$ is the speed of the particle \[m/s],
- $\alpha$ is the angle between the velocity vector $\vec{v}$ and the magnetic field $\vec{B}$,
- $F_L$ is the magnitude of the magnetic component of the Lorentz force \[N]

>[!warning] Beware!
> This version applies when only a magnetic field is present (i.e., $\vec{E} = 0$).

---

## Vector version (full Lorentz force)

$$\vec{F_L} = q \cdot (\vec{E} + \vec{v} \times \vec{B})$$

Where:
- $q$ is the electric charge of the particle \[C],
- $\vec{E}$ is the electric field vector \[V/m],
- $\vec{v}$ is the velocity vector of the particle \[m/s],
- $\vec{B}$ is the magnetic field vector \[T],
- $\vec{F_L}$ is the total Lorentz force vector \[N]

---

## Interesting result: circular motion

When a charged particle moves perpendicular to a uniform magnetic field, it travels in a circular path due to the constant magnetic force acting as centripetal force.

The period of that motion is:

$$T = \frac{2\pi m}{B \cdot q}$$

Where:
- $m$ is the mass of the particle \[kg],
- $B$ is the magnetic field strength \[T],
- $q$ is the electric charge of the particle \[C],
- $T$ is the period of one full circular rotation \[s],
- $2\pi$ comes from the full rotation angle in radians

> [!tip] Notice!
> Notably, the period **does not depend on velocity or radius**, only on mass, field strength, and charge.
