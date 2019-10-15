module.exports = function AchFix(dispatch) {
	dispatch.hook('S_UPDATE_ACHIEVEMENT_PROGRESS', 'raw', {order: -Infinity}, data => {
		try {
			dispatch.fromRaw('S_UPDATE_ACHIEVEMENT_PROGRESS', 1, data);
		} catch (_) {
			dispatch.command.message("Change zone to get Achievement progress.");
			return false;
		}
	});
}