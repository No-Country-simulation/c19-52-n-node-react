import Lists from '../dao/mongo/list.mongo.js'
import Movies from '../dao/mongo/movie.mongo.js'

import ListRepository from './list.repository.js'
import MovieRepository from './movie.repository.js'

export const listsService = new ListRepository(new Lists())
export const moviesService = new MovieRepository(new Movies())