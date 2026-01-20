## Hull Manufacturing

**Goal:** Manufacture lightweight hulls with sufficient strength to avoid fracturing of the hulls under impact.

### Manufacturing Process

We decided to use a fiberglass layup process to manufacture the hulls of our boat. In previous years, we machined the hulls from foam and applied layers of fiberglass and epoxy to waterproof and strengthen the hulls. To minimize the weight of the hulls, we applied one layer of fiberglass. During testing, the fiberglass layer suffered points of fracture when the boat collided with obstacles.

For the next iteration of our hulls for 2027, we wanted to eliminate this issue by designing hulls with sufficient strength. We decided to adjust the manufacturing methods to minimize the weight of the hulls and achieve sufficient strength to prevent fracturing in the hulls.

### Designing Hollow Hulls

To reduce the weight of the hulls, we decided to eliminate the use of foam in the hulls and manufacture hollow hulls using a negative mold. Hollow hulls would also provide space to place electronics, making the boat more compact and creating more room to place mechanisms on the deck of the boat.

Manufacturing hollow hulls poses new challenges, such as designing the structure and hardpoints of the hulls, designing an opening in the hulls to access the electronics, and creating a watertight seal. Meeting the strength requirements of the hulls is critical, since a single fracture in the hulls would expose the electronics to water.

To determine whether manufacturing hollow hulls would be feasible, we tested the material properties of the fiberglass composites.

### Material Testing

We conducted three-point bending tests to determine the material properties of the fiberglass composites. These material properties are dependent on our fiberglass layup process, and are needed to determine whether the material provides sufficient strength under impact.

We prepared fiberglass samples with 1-5 layers of fiberglass, with the fiber directions alternating with each layer. Each layer of fiberglass was coated with an epoxy mixture with equal weight to the fiberglass layer. The fiberglass samples were cut into uniform strips. Three-point bending tests were conducted using an Instron to measure the force and displacement of the samples. The Flexural Modulus and Flexural Strength were calculated and these values were compared to determine the optimal number of layers for our hulls.

![Fiberglass Samples](/content/blogs/mechanical/hull-manufacturing/fiberglass-samples.png)

<figure>
    <table width="100%" style="border:0; border-collapse:collapse; border-spacing:0;">
    <tr style="border:0;">
        <td align="center" width="50%" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/mechanical/hull-manufacturing/bending-test-1.png" width="100%" style="display:block;" />
        </td>
        <td align="center" width="50%" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/mechanical/hull-manufacturing/bending-test-2.png" width="100%" style="display:block;" />
        </td>
    </tr>
    </table>
</figure>

### Material Testing Results

Comparing the Flexural Modulus and Flexural Strength of the fiberglass composites between numbers of layers, the results did not align with our expectations. We expected that increasing the number of layers would increase the Flexural Modulus and Strength of the material, but this was not the case. There was no statistically significant trend found in our data. This could be due to slippage between the samples and mounts during the three-point bending tests, as well as uncertainty in sample dimension measurements.

<figure>
    <table width="100%" style="border:0; border-collapse:collapse; border-spacing:0;">
    <tr style="border:0;">
        <td align="center" width="50%" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/mechanical/hull-manufacturing/flexural-modulus.png" width="100%" style="display:block;" />
        </td>
        <td align="center" width="50%" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/mechanical/hull-manufacturing/flexural-strength.png" width="100%" style="display:block;" />
        </td>
    </tr>
    </table>
</figure>

### Impact Analysis

Using energy methods, we determined that for 5 layers of fiberglass, the energy absorbed by the fiberglass would not be sufficient to prevent failure in the hulls, based on the expected speed and mass of the boat undergoing a collision. We concluded that manufacturing hollow hulls would not be feasible, given that the fiberglass layers alone would not provide enough strength to avoid failure during impact. This indicates that either the number of fiberglass layers should be increased or additional supports should be used to prevent the hulls from failing.
