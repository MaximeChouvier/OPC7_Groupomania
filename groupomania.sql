-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 10 fév. 2022 à 13:40
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `groupomania`
--

-- --------------------------------------------------------

--
-- Structure de la table `comments`
--

CREATE TABLE `comments` (
  `id` int NOT NULL,
  `userId` int NOT NULL,
  `userName` text NOT NULL,
  `userImage` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `postId` int NOT NULL,
  `commentText` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id` int NOT NULL,
  `userName` text NOT NULL,
  `userId` int NOT NULL,
  `imgUrl` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `userImage` text NOT NULL,
  `postText` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imgUrl` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT 'http://localhost:3000/uploads/basic.jpg',
  `isAdmin` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `firstname`, `password`, `imgUrl`, `isAdmin`, `createdAt`, `updatedAt`) VALUES
(47, 'admin@admin.fr', 'Chouvier', 'Maxime', '$2b$10$4sOmfX3byeTSXaJ3fR7USuXtBJ8HGJXa8lBlcCYefcqM9OGEO1e9S', 'http://localhost:3000/uploads/1644493011765.jpeg', 1, '2022-02-04 12:36:50', '2022-02-10 11:36:51'),
(48, 'user@user.fr', 'Dupont', 'Damien', '$2b$10$Bvi0/d.TAb9TYH5sNp1GlO66IjuTU3kL52vN7ymEwulh2JjYn5c62', 'http://localhost:3000/uploads/basic.jpg', 0, '2022-02-08 02:58:54', '2022-02-08 02:58:54'),
(49, 'admin2@admin.fr', 'Graal', 'Naomi', '$2b$10$lxNk3E3U/5fnK586Y0WWZeQuv9zXP9bQ92cHsB/roKejvPkzpuHNa', 'http://localhost:3000/uploads/basic.jpg', 1, '2022-02-08 03:04:18', '2022-02-08 03:04:18'),
(50, 'user2@user.fr', 'Moaji', 'Sabrina', '$2b$10$SAH/kxkUgOxnj9ZanNnNiunHbDfZhXVw.FuWKZGJ56iHMcWUUz4Sm', 'http://localhost:3000/uploads/basic.jpg', 0, '2022-02-08 03:04:56', '2022-02-08 03:04:56'),
(51, 'user3@user.fr', 'Bisnor', 'Gabriel', '$2b$10$h9qd7MMWw47XPhQpo6cMDONyQ.0IQ8UAPVwwjqQ2g9q6HMzH/q56.', 'http://localhost:3000/uploads/basic.jpg', 0, '2022-02-08 03:05:41', '2022-02-08 03:05:41'),
(55, 'gabriel@mail.fr', 'Dupont', 'Enzo', '$2b$10$O0xo1F8jbdtSGE31v6eIne1zngEHgQEOlZh0ZxxJCiUbzAysE21UO', 'http://localhost:3000/uploads/1644499099631.jpeg', 0, '2022-02-10 13:06:39', '2022-02-10 13:18:19');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comments_ibfk_1` (`userId`),
  ADD KEY `comments_ibfk_2` (`postId`);

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=184;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
