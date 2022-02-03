package com.deliciousdesigns.plant;

import com.deliciousdesigns.plant.model.Plant;
import com.deliciousdesigns.plant.repository.PlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class PlantApplicationBackend implements CommandLineRunner {

	public static void main(String[] args) { SpringApplication.run(PlantApplicationBackend.class, args);}

	@Autowired
	private PlantRepository plantRepository;

	@Configuration
	public class MyConfiguration {

		@Bean
		public WebMvcConfigurer corsConfigurer() {
			return new WebMvcConfigurerAdapter() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**")
							.allowedMethods("HEAD", "GET", "PUT", "POST", "DELETE", "PATCH");
				}
			};
		}
	}

	@Override
	public void run(String... args) throws Exception {
		Plant plant = new Plant();
		plant.setSciName("Ocimum tenuiflorum");
		plant.setCommonName("Thai Holy Basil");
		plant.setPlantHeight(24);
		plant.setPlantSpacing(8);
		plant.setAnnual(Boolean.TRUE);
		plant.setPlantGermTime("10 - 12");
		plant.setPlantSeedDepth("0");
		plant.setPlantSoilTemp(75);
		plantRepository.save(plant);

//		Plant plant1 = new Plant();
//		plant1.setSciName("Solanum lycopersicum");
//		plant1.setCommonName("Black Strawberry Tomato");
//		plant1.setPlantHeight(60);
//		plant1.setPlantSpacing(24);
//		plant1.setAnnual(Boolean.TRUE);
//		plant1.setPlantGermTime("7 - 14");
//		plant1.setPlantSeedDepth("1/8");
//		plant1.setPlantSoilTemp(85);
//		plantRepository.save(plant1);

	}
}
