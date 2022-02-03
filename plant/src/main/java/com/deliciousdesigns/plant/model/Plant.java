package com.deliciousdesigns.plant.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "plants")
public class Plant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long plantId;

    @Column(name = "sci_name")
    private String sciName;

    @Column(name = "common_name")
    private String commonName;

    @Column(name = "plant_height")
    private Integer plantHeight;

    @Column(name = "plant_spacing")
    private Integer plantSpacing;

    @Column(name = "annual")
    private Boolean annual;

    @Column(name = "plant_germ_time")
    private String plantGermTime;

    @Column(name = "plant_seed_depth")
    private String plantSeedDepth;

    @Column(name = "plant_soil_temp")
    private Integer plantSoilTemp;

}
