BUILD	= docker-compose build

UP		= docker-compose up

STOP	= docker-compose stop

DOWN	= docker-compose down

SHOW	= docker system df

INFO	= @echo "Running Containers:" && docker ps && echo "Images:" && docker images && echo "Volumes:" && docker volume ls && echo "Networks:" && docker network ls 

all:
	$(BUILD) && $(UP)

build:
	$(BUILD)

up :
	$(UP)

stop :
	$(STOP)

down :
	$(DOWN)

info:
	$(INFO)

show:
	$(SHOW)

clean:
	docker system prune -a

fclean: down clean

re : down all