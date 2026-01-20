## Electronics Enclosure

The team debuted a custom electronics enclosure (EE Box) to accompany its brand new vessel, Fish 'N Ships, during RoboBoat 2025. Positive user feedback from the EE team has, since then, justified the decision to design a custom box over purchasing an off-the-shelf option. 

Driving considerations for the 2025 EE Box were weight, accessibility, modularity, temperature control, and splash-proofness. The driving question for the 2026 EE Box was how to match user feedback to specific feature improvements without compromising any aspects of the 2025 design that allowed it to meet those constraints.

## 2025 EE Box Feedback

The 2025 EE Box was designed almost entirely out of 1/8" plywood with a polyurethane laminate fabric lid cover. The box featured a base height to lid height ratio of 1:3 and elevated pegboards for easy access to electronics from both above and below, removable faceplates to accommodate evolving passthrough layouts, and an H gasket between the base and the lid for water proofness. After a season's worth of testing, we were able to compile the following list of shortcomings the 2026 EE Box then attempted to rectify.

1. Difficulty accessing the lower layer.
    Though not originally intended for use, as EE added additional capabilities to the boat the space requirements exceeded the real estate available on the elevated pegboards and spilled over into the bottom layer. Though elevated, the pegboards did not offer sufficient clearance for a human to work and debug easily.
2. Difficulty aligning a warped lid.
    Constructed out of waterproof fabric stretched over an 1/8" plywood frame, compliance in the lid of the 2025 EE Box made aligning it with the 1/4" H gasket quite difficult, especially on the water. This difficulty was compounded by the overcenter latches which, positioned facing down, were naturally inclined to droop and get in between the lid and the H gasket when the lid was lowered.
3. Laborious post-processing, joinging, and caulking steps. 
    Since the base of the box was constructed out of standard, untreated 1/8" plywood it was treated with epoxy after being laser cut to prevent delamination and warping on the water. In addition, the walls of the box had to be wood glued and later caulked to seal small gaps in the finger joints. We hoped to correct the inelegance of this process in the 2026 design.
4. Inconvenient faceplate removal
    Originally intended as a design feature to aid in changing the connectors going into and out of the box as the EE system changed, the removable faceplates were often a bottleneck in this process. Fastened with 66 screws total, many of them in almost inaccessible locations, replacing the faceplates was a manufacturing step the team loved to avoid, often at the cost of time lost debugging connections on the water.
5. Lack of internal hard points
    Intended to be water-proof to several centimeters of submergence, no holes or hard points for mounting were added to the bottom of the 2025 EE Box. This made fastening the legs of the pegboards difficult. 

![2025EEBoxIssues](/content/blogs/mechanical/eebox/2025EEBox.png)
<figcaption>Fig 1. Issues with the 2025 EE Box</figcaption>

## 2026 EE Box

The 2026 Box was redesigned with features intended to explicitly answer issues with the 2025 Box. The overall architecture of the box is described in Fig. 2, and the specific design features and the problems they were intended to address are discussed in detail.

![2026EEBox](/content/blogs/mechanical/eebox/2026Box.png)
<figcaption>Fig 2. The 2026 Box featured several new design features intended to adress problems with the 2025 version. </figcaption>

1. Difficulty Accessing the lower layer --> Hinged Pegboards
    In addition to occupying a slightly larger x-y footprint, the 2026 box also features hinged pegboards. This allows the user to flip pegboards out of the way to access the bottom layer. Crucially, the pivoting motion chosen is a rigid body rotation around the longest available side length of the pegboard--this allows cables to be pinned to the pegboards along the hinged axis--ensuring easy rotation.
    ![HingedPegboards](/content/blogs/mechanical/eebox/HingedPegboards.png)
    <figcaption>Fig 3. Hinged pegboards were added to improve bottom layer access. </figcaption>

2. Difficulty aligning a warped lid --> 3D printed Lid-Box interface and added Zipper for on-water access
    To sidestep the warped lid problem, the new box replaced the original H gasket with 3D printed Lid-Base interface with rubber along the inside. This feature allows for dimensionally accurate manufacturing of the lid-box interface and adds stiffness to lid edge without increasing weight, an advantage of infilled parts. In addition, a zipper was added to the lid for easier on-water access--removing the need to unlatch and relatch the lid every time. 
    ![Zippered Lid](/content/blogs/mechanical/eebox/LidUpdates.png)
    <figcaption>Fig 4. A zipper (not pictured) was added to the lid to improve on water access. The rim of the lid was 3D printed for rigidity and dimensional accuracy. </figcaption>

3. Laborious post-processing, joining, and caulking of the base --> Brazed Aluminum base
    To sidestep this process, the new box base is laser cut out of 1/32" aluminum. Not only does this remove half of the seams in the box and eliminate post-processing required by the previous box, it also condenses the joining and caulking steps into a single brazing step. Finally, the large aluminum base offers EE a built-in grounding plane should the boat's evolving antenna payload ever require it. This design choice also decreased the weight of the base by nearly 50%. 
    ![SingleSheetBase](/content/blogs/mechanical/eebox/SingleSheetBase.png)
    <figcaption>Fig 5. The plywood base was replaced with a thinner aluminum base that was cut out of a single sheet and brazed together--a more elegant manufacturing process. </figcaption>

4. Inconvenient faceplate removal --> Press-fit inserts and faceplate clamps
    The 2026 tackled this problem in two design features. First, the new design press-fit inserts into the faceplates. This enabled screwing faceplates in blind--sidestepping the problem of faster accessibility in cramped spaces. Second, the design used prebent PLA beams to apply a clamping force along the upper and lower edges of the faceplate. The beam curvature was determined by applying a uniform distributed load proportional to the hydrostatic stresses acting on the box at 6 cm submergence (up to the top of the base). Since the beams are manufactured in their deformed state, restoring them to their undeformed state requires an approximately similar load--the clamping load on the faceplates. Together these innovations reduced the total number of screws per faceplate by 75%.
    ![FaceplateImprovements](/content/blogs/mechanical/eebox/FaceplateClamps.png)
    <figcaption>Fig 6. To improve ease of replacing faceplates, press fit inserts were added and 75% of the screws per faceplate were replaced with prebent beams that, when screwed down, applied a clamping force across the rim of the faceplates. </figcaption>

5. Lack of internal hardpoints --> PLA rafts with captive nuts
    The design solution to this problem also answered one of the problems with a new design feature: the aluminum base. In an electronics box exposed metal invites shorts. To cover the exposed metal, PLA tiles were designed. These tiles cover the bottom of the box and together with the faceplates, cover almost all open metal surfaces. Each tile is printed with hexagonal cavities for low profile captive nuts--creating internal threads that the pegboard legs and other EE components can be screwed down to.
    ![InternalMountingPoints](/content/blogs/mechanical/eebox/InternalCaptiveNuts.png)
    <figcaption>Fig 7. To remove the risk of shorts and add internal mounting points to the box, the 2026 box featured PLA rafts with cavities for captive nuts. The rafts covered much of the exposed, conductive surface of the box and provided internal mounting points without piercing the enclosure. </figcaption>
