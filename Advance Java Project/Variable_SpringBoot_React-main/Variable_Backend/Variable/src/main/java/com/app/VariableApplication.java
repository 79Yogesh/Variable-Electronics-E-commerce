package com.app;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.entities.Categories;
import com.app.entities.Products;
import com.app.repository.CategoryRepository;
import com.app.repository.ProductRepository;

@SpringBootApplication
public class VariableApplication implements CommandLineRunner{
	
	@Autowired
	private CategoryRepository categoryRepo;
	@Autowired
	private ProductRepository productRepo;

	public static void main(String[] args) {
		SpringApplication.run(VariableApplication.class, args);
	}
	
	//Bean creation of model mapper
	@Bean
	public ModelMapper mapper() {
		ModelMapper modelMapper = new ModelMapper();
		modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);//This line configures the ModelMapper to use a strict matching strategy for mapping properties between objects. The MatchingStrategies.STRICT strategy enforces that source and destination properties have the same name and type for mapping to occur.
		return modelMapper;
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("Application Started!!!!");
		
	
	}

}
