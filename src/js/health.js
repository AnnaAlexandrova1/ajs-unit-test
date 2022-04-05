export function showHealth(item){
    if(item.health >= 50){
        return 'healthy';
    }
    else if(item.health >= 15 && item.health < 50){
        return 'wounded';
    }
    else if(item.health < 15){
        return 'critical'
    }
}