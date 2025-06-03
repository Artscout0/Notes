---
aliases:
  - Faraday’s Law
  - EMF
  - flux change
---
# Electromotive force (EMF) and flux change

A **changing magnetic flux** through a closed loop induces an **electromotive force (EMF)**, which can drive a current. This phenomenon is described by **Faraday’s Law of Induction**.

---

## Faraday's Law

$$\mathcal{E} = -N \cdot \frac{d\phi}{dt}$$

Where:
- $\mathcal{E}$ is the induced EMF \[V],
- $N$ is the number of turns in the coil,
- $\phi$ is the magnetic flux through a single loop \[Wb],
- $\dfrac{d\phi}{dt}$ is the rate of change of flux with respect to time,
- The **minus sign** reflects [[#Lenz’s Law]] (see below)

---

### Lenz’s Law

The **induced EMF always opposes the change** in magnetic flux that caused it.

> [!tip]
> In other words, the system creates currents whose magnetic effects resist the flux change (like a magnetic “inertia”).

This is why the formula has a negative sign: it ensures the direction of the induced EMF opposes the change in flux.

---

## Special case: constant rate of change

If the magnetic flux changes at a constant rate, and the coil has $N$ turns, the formula simplifies to:

$$\mathcal{E} = -N \cdot \frac{\Delta\phi}{\Delta t}$$

---

## Practical intuition

- **Increasing flux** → Induced EMF creates a magnetic field that **opposes the increase**.
- **Decreasing flux** → Induced EMF tries to **rebuild the lost field**.
- If the flux is **steady**, no EMF is induced.

---

## Link to motion (Motional EMF)

If a conductor of length $l$ moves with velocity $v$ perpendicular to a magnetic field $B$:

$$\mathcal{E} = B \cdot l \cdot v$$

This is a direct result of Lorentz force pushing charges along the conductor.

---

**Tip:** Faraday’s Law is the key principle behind generators, transformers, induction cooktops, and even guitar pickups.
