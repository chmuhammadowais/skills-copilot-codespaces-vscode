function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberControllers',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: 'm'
        }
    };
}