package org.dsi.keriback.repository;

import org.dsi.keriback.Entity.Aid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AidRepository extends JpaRepository<Aid, Integer> {
     Optional<Aid> findByAlias(String alias);
}
